// my style
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

// my style
export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
};

export const buttonStyle = {
    customBtn: "flex py-5 px-16 text-xl bg-blue-600 text-white font-medium rounded-full text-center hover:bg-blue-500 transition-all"
}

export const notFoundStyle = {
    container:  "w-full mx-auto my-auto py-44 fixed top-20",
    contentContiner: "flex flex-col justify-center items-center pt-16",
    imageContent: "w-2/4 md:w-1/3 lg:w-1/4 mx-auto",
    titleContent: "font-bold text-3xl text-gray-900",
    paragraphContent: "text-gray-400 text-xl md:text-2xl mt-4 text-center"
}

export const loginStyle = {
    inputLabel : "pointer-events-none inset-y-0 left-0 pl-6" ,
    inputStyle : "bg-gray-50 border border-blue-200 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full 2xl:w-3/4 pl-20 mt-4 p-2.5  dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-16",
    imageContainer : "hidden lg:block my-auto lg:2/3 xl:w-3/4 2xl:w-3/5 3xl:w-2/4 mt-40 lg:pr-20 xl:pr-0 xl:mt-36 2xl:mt-12",
    loginContainer: "w-full 2xl:w-3/4 xsm:pt-32 sm:pt-44 md:pt-44",
    loginBorder: "border border-gray-300 border-b-4 rounded-full w-32 mt-6 2xl:mt-10",
    loginTitle: "font-bold text-gray-800 xsm:text-4xl md:text-5xl 2xl:text-6xl",
    loginTitleSecondary : "text-2xl sm:text-3xl xl:text-4xl h-16 mt-4 bg-gradient-to-r from-blue-500 to-green-300 text-transparent bg-clip-text font-medium",
    loginParagraph: "text-gray-400 text-xl sm:text-2xl w-full xl:w-2/3 leading-relaxed"
}

export const detailUserStyle = {
    container: "flex flex-col lg:flex-row w-full mt-64 xl:mt-80 3xl:mt-64 h-full",
    sectionData: "w-full lg:w-1/2 flex flex-col justify-start gap-10 mx-auto lg:mx-0",
    sectionImage: "w-full lg:w-5/6 2xl:w-3/4 p-20 mt-0 lg:mt-0 lg:py-0",
    linkContainer: "flex flex-row gap-4 justify-center lg:justify-start text-blue-600 hover:text-blue-500 transition delay-75",
    dataContainer: "w-full flex flex-col items-center justify-center my-auto gap-10",
    dataTitle: "text-7xl 2xl:text-8xl font-bold text-gray-800",
    dataParagraph: "text-4xl 2xl:text-5xl text-gray-400",
    imageContainer: "w-full flex justify-end 3xl:justify-center",
    imageContent: "w-full xl:w-4/6 shadow-blue-200 lg:rounded-es-[320px] rounded-3xl shadow-2xl hover:rotate-12 transition-all hover:p-12 hover:delay-75"
}

export const overviewStyle = {
    container: "flex flex-row mt-44 md:mt-32 xl:mt-4 2xl:mt-0 max-h-screen relative",
    contentCotainer: "w-full lg:w-1/2 flex flex-col justify-start lg:my-auto",
    contentInfoContainer: "flex flex-col mt-2 gap-10 lg:gap-2 text-3xl text-gray-400 leading-loose",
    listSyle: "list-disc text-center lg:text-start list-inside leading-relaxed",
    headingMain: "text-center lg:text-start text-6xl sm:text-7xl 2xl:text-8xl font-semibold",
    headingSecondary: "text-center lg:text-start text-3xl md:text-4xl font-medium",
    paragraph: "w-full lg:w-[85%] text-center lg:text-start leading-relaxed",
    buttonContiner: "mt-16 lg:mt-8 w-full lg:w-2/4 2xl:w-1/3",
    imageContainer: "flex-1 md:my-0 md:pt-24 my-20 relative",
    imageContent: "hidden sm:block lg:w-[90%] lg:-top-14 lg:-right-14 relative z-[21]"
} 

export const cardUserStyle = {
    container: "group w-[280px] h-[380px] sm:w-[260px] sm:h-[380px] 2xl:w-[310px] 2xl:h-[440px] pb-6 bg-white flex-col justify-start items-center gap-5 inline-flex shadow-lg hover:shadow-xl hover:p-6 hover:translate-y-4 transition-all",
    imageContent: "w-[310px] h-[480px] group-hover:rounded-xl",
    infoContainer: "flex-col justify-start items-center flex my-4",
    heading: "text-center text-stone-700 text-3xl 2xl:text-4xl font-bold group-hover:text-blue-600 transition-all",
    paragraph : "text-center text-stone-400 text-2xl 2xl:text-3xl mt-2 font-medium group-hover:text-blue-600 transition-all"
}

export default styles;