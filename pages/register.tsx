import router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useLocalStorageStore } from "../lib/localStorageStore";
import { PageWrapper } from "../components/PageWrapper";

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
    <PageWrapper>
      <div className="w-full relative lg:max-w-xl mb-[100px] z-20">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white mono">
          Регистрация
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                ФИО
                <input
                  {...register("fullName", {
                    required: true,
                  })}
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Введите ваше ФИО"
                />
              </label>
            </div>
            <div className="w-full">
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
                <input
                  {...register("age", { required: true })}
                  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Сколько вам лет"
                />
              </label>
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                defaultValue="All"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="All">Select category</option>
                <option value="TV">TV/Monitors</option>
                <option value="PC">PC</option>
                <option value="GA">Gaming/Console</option>
                <option value="PH">Phones</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Item Weight (kg)
              </label>
              <input
                type="number"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="12"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <div className="h-4" />
          <button className="btn">
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
