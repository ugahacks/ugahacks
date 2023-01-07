import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import {EventStatus} from "../enums/eventStatus";
import { useRouter } from "next/router";
import vercelPic from "../public/vercel.svg";
import hacks8Byte from "../public/byte_mini.png"
import hacks8Banner from "../public/byte_banner.png"
import Image from "next/image";


export interface EventDetail {
    eventName: string;
    date: string;
    description: string,
    status: EventStatus,
    page: string,
}

export interface ApplicationPaths {
    application_type: string,
    deadline: string,
    page: string,
    disabled: boolean,
}


  export default function Example(props: ApplicationPaths) {
    const router = useRouter();

    function handleClick() {
      if (!props.disabled) {
        router.push(props.page);
      }
    }

    return (
      <>
        <div onClick={handleClick}>
          {!props.disabled ? (
            <Card className="w-96">
              <CardHeader color="blue" className="relative h-56">
                <Image
                  src={hacks8Byte}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {props.application_type}
                </Typography>
                <Typography>
                  Submissions close on {props.deadline}
                </Typography>
              </CardBody>
            </Card>
          ) : (
            <Card className="w-96 bg-slate-300">
              <CardHeader color="blue" className="relative h-56">
                <Image
                  src={hacks8Byte}
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {props.application_type}
                </Typography>
                <Typography>
                  You have already registered for this event! Thank you!
                </Typography>
              </CardBody>
            </Card>
          )}
        </div>
      </>
    );
  }