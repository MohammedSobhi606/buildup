import { SendIcon } from "lucide-react";
import MyButton from "./MyButton";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function Form() {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-5 mb-5">
        <Input placeholder={"Full Name"} type={"fullname"} />
        <Input placeholder={"Email Address"} type={"email"} />
        <div className=" flex flex-col xl:flex-row gap-4 ">
          {" "}
          <Input type={"phone"} placeholder="phone number" />
          <Select>
            <SelectTrigger
              className={
                "w-full rounded-none text-secondary outline-none h-[54px]!"
              }
            >
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectItem value="construction">construction</SelectItem>
                <SelectItem value="renovation">renovation</SelectItem>
                <SelectItem value="Comercial">Comercial</SelectItem>
                <SelectItem value="Structural">Structural</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {/* textarea */}
        <Textarea
          className={"h-[180px] resize-none rounded-none"}
          placeholder="Enter your message"
        />
        <MyButton
          text={"Send message"}
          bgColor={"bg-accent"}
          icon={<SendIcon className="text-white " />}
        />
      </div>
    </form>
  );
}
