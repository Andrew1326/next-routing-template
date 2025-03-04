import createStructure from "@/app/_routing/createStructure";
import routes from "@/app/_routing/routes";
interface IProps {
    children: React.ReactNode;
}

createStructure(routes);

const RootLayout = ({ children }: IProps) => {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}

export default RootLayout