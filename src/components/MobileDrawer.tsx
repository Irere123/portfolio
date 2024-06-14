import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import {
  Experiments,
  Fingerprint,
  Github,
  LinkIcon,
  LinkedIn,
  Posts,
  Resume,
  Twitter,
} from "./icons";
import { ArrowIcon } from "./ArrowIcon";

export const MobileDrawer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Drawer>
      <DrawerTrigger className="flex justify-center items-center">
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <div className="flex flex-col gap-4 justify-center p-6">
            <Link href={`/`} className="flex gap-2 items-center cursor-pointer">
              <Fingerprint />
              <p>About me</p>
            </Link>
            <Link
              href={`/blog`}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Posts />
              <p>Posts</p>
            </Link>
            <Link
              href={`/resume`}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Resume />
              <p>Resume</p>
            </Link>
            <Link
              href={`/sitemap.xml`}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Experiments />
              <p>Experiments</p>
            </Link>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground ">External</p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-2 items-center justify-between cursor-pointer">
                <a
                  target="_blank"
                  href="https://github.com/irere123"
                  className="flex gap-2"
                >
                  <Github width={22} height={22} />
                  <p>Github</p>
                </a>
                <ArrowIcon width={10} height={10} />
              </div>
              <a
                target="_blank"
                href="https:/twitter.com/irere_emmanuel"
                className="flex gap-2 items-center justify-between cursor-pointer"
              >
                <div className="flex gap-2">
                  <Twitter width={20} height={20} />
                  <p>Twitter</p>
                </div>
                <ArrowIcon width={10} height={10} />
              </a>
              <a
                target="_blank"
                href="https://rw.linkedin.com/in/irere-emmanuel"
                className="flex gap-2 items-center justify-between cursor-pointer"
              >
                <div className="flex gap-2">
                  <LinkedIn width={20} height={20} />

                  <p>Linked in</p>
                </div>
                <ArrowIcon width={10} height={10} />
              </a>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">Projects & Work</p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex gap-2 items-center justify-between cursor-pointer">
                <div className="flex gap-2">
                  <LinkIcon width={18} height={18} />
                  <p>Spek</p>
                </div>
                <ArrowIcon width={10} height={10} />
              </div>
              <div className="flex gap-2 items-center justify-between cursor-pointer">
                <div className="flex gap-2">
                  <LinkIcon width={18} height={18} />
                  <p>Neox</p>
                </div>
                <ArrowIcon width={10} height={10} />
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
