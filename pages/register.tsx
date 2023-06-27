import router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useLocalStorageStore } from "../lib/localStorageStore";

import { Button } from "../components/Button";

type Inputs = {
  fullName: string;
  age: number;
};

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const [_, setValue] = useLocalStorageStore();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    await new Promise((res) => {
      setTimeout(() => res({}), 2000);
    });

    setValue(data.fullName);

    router.push("/registered");
  };

  return (
    <div className="flex flex-col items-center justify-between py-[120px] bg-white">
      <div className="hero min-h-screen">
        <div className="hero-content text-neutral-content flex flex-col max-w-[700px] w-full">
          <h1 className="text-3xl font-bold text-pink-400 mb-4">РЕГИСТРАЦИЯ</h1>
          <div className="text-gray-800 w-full text-lg">
            Заполните все вопросы чтобы стать участником{" "}
            <span className="text-pink-400">СКИНИИ 2023</span>
            <br />
            Стоимость школы - 100 BYN
          </div>
          <div className="text-gray-500 w-full text-md">27.07 - 29.07</div>
          <form onSubmit={handleSubmit(onSubmit)} className="text-start w-full">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                  Фамилия Имя
                  <input
                    {...register("fullName", {
                      required: true,
                    })}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Дата рождения
                  <input
                    {...register("age", { required: true })}
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Город
                </label>
                <input
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Телефон
                </label>
                <input
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Церковь
                </label>
                <input
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ваше служение в церкви
                </label>
                <select
                  id="category"
                  defaultValue="All"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="All">Лидер прославления</option>
                  <option value="TV">Служитель прославления</option>
                  <option value="PC">Пастор</option>
                  <option value="GA">Помощник пастора</option>
                  <option value="PH">Другое</option>
                  <option value="PH">Другое</option>
                  <option value="PH">Не несу служение</option>
                  <option value="PH">Не прихожанин церкви</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Комментарий
                </label>
                <textarea
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                ></textarea>
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
