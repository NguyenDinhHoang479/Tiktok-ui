import Header from "../components/Header";
const ProfileLayout = ({children}) => {
    console.log("huhu");
    return ( <div>
        <Header/>
        <div className="content">{children}</div>
    </div> );
}
 
export default ProfileLayout;