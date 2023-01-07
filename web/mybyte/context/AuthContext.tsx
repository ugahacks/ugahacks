import React, { createContext, useContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
  } from "firebase/auth";
import {
    doc,
    getFirestore,
    query,
    getDocs,
    setDoc,
    collection,
    where,
    addDoc,
    updateDoc,
    serverTimestamp,
    limit,
    getDoc,
    FirestoreError
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Events } from "../enums/events";
import { Users } from "../enums/userType";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FirebaseError } from "firebase/app";

import { RegisterForm } from "../interfaces/registerForm";
import { useRouter } from "next/router";

export interface UserType {
  email: string | null;
  uid: string | null;
}

interface EventRegistered {
  HACKS8: boolean | null;
}

export interface UserInfoType {
  first_name: string | null;
  last_name: string | null;
  points: number;
  registered: EventRegistered;
  //user_type: Users | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    first_name: null,
    last_name: null,
    points: 0,
    registered: {
      "HACKS8": null
    },
    //user_type: null
  })
  const [loading, setLoading] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [resumeLink, setResumeLink] = useState<string>("");
  const [currEvent, setCurrEvent] = useState<Events>();

  const userRef = collection(db, "users-stage");

  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curr_user) => {
      if (curr_user) {
        setUser({
          email: curr_user.email,
          uid: curr_user.uid,
        });
        setUserInformation(curr_user.uid);
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const googleProvider = new GoogleAuthProvider();

  const validUser = () => {
    if (user) {
        return true;
    }

    return false;
  }

  const storeUserRegistrationInformation = async (data: RegisterForm) => {
    const storage = getStorage();
    const file = data.resume[0]
    console.log(file.name)
    const storageRef = ref(storage, 'resume/' + user.uid + '/' + file.name)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed',
      (snapshot) => {
        console.log("upload in progress")
      },
      (error) => {
        console.log("Error uploading resume")
        alert(error)
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDoc(doc(db, "registration-stage", user.uid ? user.uid : ""), {
            uid: user.uid,
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            phoneNumber: data.phoneNumber,
            countryResidence: data.countryResidence.label,
            year: data.year,
            major: data.major,
            inputMajor: data.inputMajor,
            minor: data.minor,
            school: data.school.value,
            inputSchool: data.inputSchool,
            email: data.email,
            participated: data.participated,
            hopeToSee: data.hopeToSee,
            dietaryRestrictions: data.dietaryRestrictions,
            shirtSize: data.shirtSize,
            codeOfConduct: data.codeOfConduct,
            eventLogisticsInfo: data.eventLogisticsInfo,
            mlhCommunication: data.mlhCommunication,
            resumeLink: downloadURL,
            submitted_time: serverTimestamp(),
          });
        })
      }
    )
          
    // Set the user status to registered for hacks8
    await updateDoc(doc(userRef, user.uid ? user.uid : ""), {
      "registered.HACKS8": true
    })

    // Update userInfo
    setUserInformation(user.uid)

  }

  const signUp = async (first_name: string, last_name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        setFirstName(first_name)
        setLastName(last_name)
        const user = res.user;
        const name = first_name + " " + last_name;
        await setDoc(doc(userRef, user.uid), {
            uid: user.uid,
            first_name: first_name,
            last_name: last_name,
            name: name,
            authProvider: "local",
            email: email,
            points: 0,
            registered: {},
            added_time: serverTimestamp(),
        });
        sendEmailVerification(user)
        signOut(auth)

    } catch (err: any) {
      throw err;
    }
  };

  const logIn = async (email: string, password: string) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    if (!user.emailVerified) {
      setUser({ uid: null, email: null})
      signOut(auth)
      return false
    }
    
    return true
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
  }

  const logInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const google_user = res.user;
        // const q = query(collection(db, "users"), where("uid", "==", user.uid));
        // const docs = await getDocs(q);

        const docRef = doc(db, "users-stage", google_user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setDoc(doc(userRef, google_user.uid), {
                uid: google_user.uid,
                first_name: "",
                last_name: "",
                name: google_user.displayName,
                authProvider: "google",
                email: google_user.email,
                points: 0,
                registered: {},
                added_time: serverTimestamp(),
            });
        }
    } catch (err: any) {
        console.error(err);
    }
  };

  const storeFirstAndLastName = async (first_name: string, last_name: string) => {
    try {
        console.log(user.uid)
        const docRef = doc(db, "users-stage", user.uid ? user.uid : "");
        console.log(docRef)
        await updateDoc(docRef, {
            first_name: first_name,
            last_name: last_name,
        });
        setUserInformation(user.uid)
    } catch (err: any) {
        console.log(err);
    }
  };

  const hasFirstAndLastName = async () => {
      const docRef = doc(db, "users-stage", user.uid ? user.uid : "1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && (docSnap.data().first_name === "" || docSnap.data().last_name === "")) {
          return false;
      }

      return true;
  };

  const getFirstName = async () => {
    const docRef = doc(db, "users-stage", user.uid ? user.uid : "0");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return docSnap.data().first_name;
  }

  const getRegisteredEvents = async () => {
    const docRef = doc(db, "users-stage", user.uid ? user.uid : "0");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return docSnap.data().registered;
  }

  const setUserInformation = async (uid: string | null) => {
    console.log("Setting up usre info")
    const docRef = doc(db, "users-stage", uid ? uid : "");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }
    console.log(docSnap.data().first_name)
    setUserInfo({
      first_name: docSnap.data().first_name,
      last_name: docSnap.data().last_name,
      points: docSnap.data().points,
      registered: docSnap.data().registered,
      //user_type: docSnap.data().user_type,
    })
  }
  
  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, userInfo, signUp, logIn, resetPassword, logInWithGoogle, logOut, storeFirstAndLastName, hasFirstAndLastName, validUser, getFirstName, getRegisteredEvents, storeUserRegistrationInformation, setUserInformation, currEvent, setCurrEvent }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};