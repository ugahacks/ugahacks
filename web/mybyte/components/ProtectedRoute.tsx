import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, userInfo } = useAuth();

  useEffect(() => {
    if (user.uid == null) {
      router.push("/login");
    } 
  }, [router, user]);
  return <div className="h-screen min-h-full overflow-auto">{user ? children : null}</div>;
};

export default ProtectedRoute;