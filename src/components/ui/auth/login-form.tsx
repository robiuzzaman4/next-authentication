"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { login } from "@/actions/login";
import { Loader } from "lucide-react";
import { LoginSchema } from "@/schema";
import { useTransition } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    // call server action and show response message
    startTransition(() => {
      login(values).then((data) => {
        if (data?.success) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      });
    });

    // reset form
    form.reset({
      email: "",
      password: "",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto space-y-3 bg-card text-card-foreground p-6 rounded-xl border shadow-lg"
      >
        <span className="grid gap-1 text-center">
          <h3 className="text-2xl font-medium tracking-tighter">
            Login into <span className="text-primary">Flexileave</span>
          </h3>
          <p className="text-sm text-muted-foreground tracking-tighter">
            Welcome Back.
          </p>
        </span>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} type="email" />
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
                <Input placeholder="******" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={pending}>
          {pending && <Loader className="text-sm animate-spin" />}
          Login
        </Button>
        <p className="text-muted-foreground text-sm">
          Don&apos;t have any account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
