import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { Button } from "../components/Button";

type Inputs = {
  fullName: string;
  age: number;
  city: string;
  phone: string;
  church: string;
  days: string;
  sermon: string;
  comment: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<Inputs>();
  const supabase = createClientComponentClient();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const user = await supabase.from("s-users").insert<Inputs>([
      {
        fullName: data["fullName"] ?? "-",
        age: data["age"] ?? "-",
        phone: data["phone"] ?? "-",
        church: data["church"] ?? "-",
        city: data["city"] ?? "-",
        days: data["days"] ?? "-",
        sermon: data["sermon"] ?? "-",
        comment: data["comment"] ?? "-",
      },
    ]);

    if (user.error) {
      setError(true);
      setLoading(false);

      return;
    }

    router.push("/registered");
  };

  return (
    <div className="flex flex-col items-center justify-between py-[120px] bg-white">
      <div className="hero min-h-screen">
        <div className="hero-content text-neutral-content flex flex-col max-w-[700px] w-full">
          <h1 className="text-3xl font-bold text-pink-400 mb-4">РЕГИСТРАЦИЯ</h1>
          <div className="text-gray-800 w-full text-xl">
            Заполните все вопросы чтобы стать участником{" "}
            <span className="text-pink-400">СКИНИИ 2023</span>
            <div className="text-lg mt-2">
              <div>1 день - 35 рублей</div>
              <div>3 дня - 100 рублей</div>
            </div>
            <div className="mt-2 text-lg">
              <div className="text-gray-900">Что входит в эту цену?</div>
              <div className="">
                - полное посещение школы в зарегистрированные дни
              </div>
              <div className="">- блокнот</div>
              <div className="">- карандаш</div>
              <div className="">- бейдж</div>
              <div className="">- приятные бонусы</div>
            </div>
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
                    {...register("fullName")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 ">
                  Дата рождения
                  <input
                    {...register("age")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="14/10/1998"
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 ">
                  Город
                  <input
                    {...register("city")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 ">
                  Телефон
                  <input
                    {...register("phone")}
                    type="tel"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 ">
                  Церковь
                  <input
                    {...register("church")}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 ">
                  Количество дней
                  <input
                    {...register("days")}
                    type="number"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </label>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Ваше служение в церкви
                  <select
                    {...register("sermon")}
                    defaultValue="Лидер прославления"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option value="Лидер прославления">
                      Лидер прославления
                    </option>
                    <option value="Служитель прославления">
                      Служитель прославления
                    </option>
                    <option value="Пастор">Пастор</option>
                    <option value="Помощник пастора">Помощник пастора</option>
                    <option value="Другое">Другое</option>
                    <option value="Не несу служение">Не несу служение</option>
                    <option value="Не прихожанин церкви">
                      Не прихожанин церкви
                    </option>
                  </select>
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
