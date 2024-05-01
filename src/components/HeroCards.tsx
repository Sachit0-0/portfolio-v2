import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import sachitt from "@/assets/Logo/sachit.jpg";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[600px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="border border-secondary bg-secondary text-secondary-foreground font-mono text-lg p-6 w-72 mx-auto rounded-md shadow-md relative overflow-hidden terminal-loader">
            <div className="terminal-header">
              <div className="terminal-title">Status</div>
              <div className="terminal-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
            </div>
            <div className="text">
              <span className="inline-block whitespace-no-wrap">
                Encrypted...
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent>Probably working rn</CardContent>
      </Card>
      <Card className="absolute right-[20px] top-64 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src={sachitt}
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Sachit Dahal</CardTitle>
          <CardDescription className="font-normal text-primary">
            Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Stay in Touch</p>
        </CardContent>
        <CardFooter className="flex justify-center items-center space-x-4 pt-4">
          <a
            href="https://github.com/Sachit0-0"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sachit-dahal-59a05b212/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.facebook.com/sachit.dahal.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaFacebookSquare className="icon" />
          </a>
          <a
            href="https://www.instagram.com/sachitt0_0/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="mailto:sachitdahal33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaEnvelope className="icon" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
