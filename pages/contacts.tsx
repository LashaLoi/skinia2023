import styles from "../components/RootLayout/index.module.scss";

export default function ContactsPage() {
  return (
    <>
      <div className="mt-[100px]">
        <div className={styles.center} />
      </div>
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Наши спикеры
      </h2>
      <div className="mt-4 mb-10">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="lg:w-2/3 w-full sm:h-[500px] h-[400px]  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative mb-[120px] z-20">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 dark:invert"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.9171224462784!2d26.026471415711562!3d53.12963329862263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d8cfe1a9c1c715%3A0x2844f8b8b22c6888!2sUlitsa%20Smolenskaya%2028%2C%20Baranavi%C4%8Dy%2C%20Belarus!5e0!3m2!1sen!2sus!4v1653587038964!5m2!1sen!2sus"
        ></iframe>
      </div>
    </>
  );
}
