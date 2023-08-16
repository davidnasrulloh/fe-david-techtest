const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",

    paddingX: "sm:px-16 md:px-32 lg:px-44 px-12",
    paddingY: "md:py-44 py-16",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const buttonStyle = {
    customBtn: "py-5 px-16 text-xl bg-blue-600 text-white font-medium rounded-full text-center hover:bg-blue-500 transition-all",
}

export const notFoundStyle = {
    container:  "w-full mx-auto my-auto py-44 fixed top-24",
    contentContiner: "flex flex-col justify-center items-center pt-16",
}

export const loginStyle = {
    inputLabel : "pointer-events-none inset-y-0 left-0 pl-6" ,
    inputStyle : "bg-gray-50 border border-blue-200 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full 2xl:w-3/4 pl-20 mt-4 p-2.5  dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16"
}

export default styles;