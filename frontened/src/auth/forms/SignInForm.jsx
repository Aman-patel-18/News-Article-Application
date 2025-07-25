import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { email, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, Toaster } from "sonner";


const formSchema = z.object({
  email: z.string().min(0,{message: "Invalid email address"}),
  password: z.string().min(8, {message: "password must be atleast 8 characters"}),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        toast("sign in failed! try again")
        return setErrorMessage(data.message);
      }

      if (res.ok) {
        toast("Sign in successful")
        navigate("/");
      }

      setLoading(false);
    } catch (error) {
      setErrorMessage(error?.message || "Something went wrong");
      setLoading(false);
      toast("Something went wrong")
    }
  }
  return (
    <div className="min-h-screen mt-20">
  <div className="flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-start gap-10 md:gap-20">

        {/*left*/}
        <div className="md:w-[40%]">
          <Link
            to={"/"}
            className="font-bold text-2xl sm:text-4xl flex flex-wrap"
          >
            <span className="text-slate-500">Morning</span>
            <span className="text-slate-900">Dispatch</span>
          </Link>
          <h2
            className="text-[24px] md:text-[30px] font-bold leading-[140%]
          tracking-tighter pt-5 sm:pt-12"
          >
            Sign in to your account.
          </h2>
          <p className="text-[14px] font-medium md:font-normal md:text-[16px] leading-[140%] text-slate-500 mt-2">
            Welcome Back, Please provide your details
          </p>
        </div>

        {/*right*/}

        <div className="flex-1 md:w-[60%]">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input type="email" placeholder="xyz@example.com" {...field} />
                    </FormControl>
            
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
            
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="bg-blue-500 w-full" disabled={loading}>
                {loading?(<span className="animate-pulse">Loading</span>)
                :(<span>Sign In</span>)}
                </Button>
            </form>
          </FormProvider>

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
            Sign Up</Link>
          </div>
          {errorMessage && <p className="mt-5 text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
