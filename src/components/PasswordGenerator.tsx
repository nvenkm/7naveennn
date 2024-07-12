"use client";

import { z } from "zod";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  passwordLength: z.array(
    z
      .number()
      .min(6, { message: "Must be more than 6 characters" })
      .max(20, { message: "Must be less than 20 characters " }),
  ),
  addSpecialCharacters: z.boolean(),
  addNumbers: z.boolean(),
  addUppercase: z.boolean(),
  addLowercase: z.boolean(),
});
const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);
  console.log(copied);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passwordLength: [6],
      addSpecialCharacters: false,
      addNumbers: true,
      addUppercase: false,
      addLowercase: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const password = createPassword(values);
    setGeneratedPassword(password);
  }

  useEffect(() => {
    const password = createPassword(form.getValues());
    setGeneratedPassword(password);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="first-letter: flex">
        <div className="leading-1 flex w-full max-w-[600px] items-center rounded-sm rounded-r-none border-2 border-primary pl-3 text-2xl tracking-wider">
          {generatedPassword}
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(generatedPassword);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
          className="rounded-l-none text-2xl text-black"
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-2xl"
          >
            {/* Password Length */}
            <FormField
              control={form.control}
              name="passwordLength"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-2xl">
                    Password Length ( {form.getValues("passwordLength")} )
                  </FormLabel>
                  <FormControl>
                    <Slider
                      value={field.value}
                      onValueChange={(value) => {
                        form.setValue("passwordLength", value);
                      }}
                      min={0}
                      max={20}
                      step={1}
                    />
                  </FormControl>
                  <FormDescription className="text-lg">
                    Length must be between 6 and 20
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid w-full grid-cols-2 gap-4">
              {/* Add Special Characters */}
              <FormField
                control={form.control}
                name="addSpecialCharacters"
                render={({ field }) => (
                  <FormItem className="space-y-4 border border-solid border-zinc-700 p-3">
                    <FormLabel className="text-2xl">
                      Add Special Characters?
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="ml-2 h-5 w-5"
                      />
                    </FormControl>
                    <FormDescription className="text-lg">
                      Length must be between 6 and 20
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Add Numbers */}
              <FormField
                control={form.control}
                name="addNumbers"
                render={({ field }) => (
                  <FormItem className="space-y-4 border border-solid border-zinc-700 p-3">
                    <FormLabel className="text-2xl">Add Numbers?</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="ml-2 h-5 w-5"
                      />
                    </FormControl>
                    <FormDescription className="text-lg">
                      Do you want to add numbers?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Add Uppercase */}
              <FormField
                control={form.control}
                name="addUppercase"
                render={({ field }) => (
                  <FormItem className="space-y-4 border border-solid border-zinc-700 p-3">
                    <FormLabel className="text-2xl">Add Uppercase?</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="ml-2 h-5 w-5"
                      />
                    </FormControl>
                    <FormDescription className="text-lg">
                      Do you want to add uppercase characters?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Add Lowercase */}
              <FormField
                control={form.control}
                name="addLowercase"
                render={({ field }) => (
                  <FormItem className="space-y-4 border border-solid border-zinc-700 p-3">
                    <FormLabel className="text-2xl">
                      Add Lowercase Characters?
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        className="ml-2 h-5 w-5"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription className="text-lg">
                      Do you want to add lowercase characters?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="text-2xl text-black">
              Generate Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PasswordGenerator;

function createPassword(values: any) {
  const passwordLength = values.passwordLength;
  const addSpecialCharacters = values.addSpecialCharacters;
  const addNumbers = values.addNumbers;
  const addUppercase = values.addUppercase;
  const addLowercase = values.addLowercase;

  let password = "";
  let charSet = "";
  const dataSet = {
    lowerCaseAlphabet: "abcdefghijklmnopqrstuvwxyz",
    upperCaseAlphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    specialCharacters: "!@#$%^&*()_+",
  };
  if (addSpecialCharacters) {
    charSet += dataSet.specialCharacters;
  }
  if (addNumbers) {
    charSet += dataSet.numbers;
  }
  if (addUppercase) {
    charSet += dataSet.upperCaseAlphabet;
  }
  if (addLowercase) {
    charSet += dataSet.lowerCaseAlphabet;
  }

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(random, random + 1);
  }

  return password;
}
