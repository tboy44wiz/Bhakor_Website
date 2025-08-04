import { Outlet } from "react-router";
import HeaderComponent from "../components/header.component";
import FooterComponent from "../components/footer.component";


const AppLayout = () => {

    return (
        <main className="h-screen w-full bg-gray-100">
            <title>Bhakor Group Ltd</title>
            <meta name="description" content="Bharkor. Welcome to Bhakor Group, where our suite of services is crafted to address the intricate needs of the evolving oil and gas sector in Nigeria." />
            <meta name="keywords" content="Increasing Productivity Using Natural Resources" />
            <meta name="author" content="Osondu Tochukwu Andrew (tosolife@yahoo.com, +2348036802243)" />
            <link rel="author" href="https://www.linkedin.com/in/osondu-tochukwu-81359a96/" />

            {/*==== Header ====*/}
            <HeaderComponent />            

            {/*==== Main Body ====*/}
            <div className="h-auto w-full">
                <Outlet />
            </div>

            {/*==== Footer ====*/}
            <FooterComponent />
        </main>
    );
};

export default AppLayout;