import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { Button } from "../components/Button";

type Inputs = {
  full_name: string;
  price: string;
  comment: string;
  email: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<Inputs>();
  const supabase = createClientComponentClient();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const user = await supabase.from("s-sponsors").insert<Inputs>([
      {
        full_name: data["full_name"] ?? "-",
        price: data["price"] ?? "-",
        comment: data["comment"] ?? "-",
        email: data["email"] ?? "-",
      },
    ]);

    if (user.error) {
      setError(true);
      setLoading(false);

      return;
    }

    router.push("/sponsored");
  };

  return (
    <div className="flex flex-col items-center justify-between py-[120px] bg-white">
      <div className="hero min-h-screen">
        <div className="hero-content text-neutral-content flex flex-col max-w-[700px] w-full">
          <h1 className="text-3xl font-bold text-pink-400 mb-4">СПОНСОРСТВО</h1>
          <div className="text-gray-800 w-full text-xl">
            Заполните все вопросы чтобы стать спонсором{" "}
            <span className="text-pink-400">СКИНИИ 2023</span>
          </div>
          <div className="text-gray-500 w-full text-md">27.07 - 29.07</div>
          {error && (
            <div className="alert alert-error mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Что-то пошло не так, перезагрузите страницу и попробуйте снова
              </span>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="text-start w-full">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">
                  Фамилия Имя
                  <input
                    {...register("full_name")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">
                  Ваша почта
                  <input
                    {...register("email")}
                    type="email"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    placeholder="emailexample@gmail.com"
                  />
                </label>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 ">
                  Сумма пожертвования
                  <input
                    {...register("price")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <label className="block  text-sm font-medium text-gray-900 ">
                  Комментарий
                  <textarea
                    {...register("comment")}
                    rows={8}
                    className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  "
                  />
                </label>
              </div>
            </div>
            <div className="h-4" />
            <Button>{loading ? "Отправка..." : "Отправить"}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
