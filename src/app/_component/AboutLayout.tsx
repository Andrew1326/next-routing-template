interface IProps {
    children: React.ReactNode;
}

const AboutLayout = ({ children }: IProps) => {
    return <div style={{ background: "blue" }}>{children}</div>
}

export default AboutLayout