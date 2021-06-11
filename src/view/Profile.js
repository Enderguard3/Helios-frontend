import Navbar from '../components/Navbar'
import ProfileComponent from '../components/ProfileComponent'
import Footer from '../components/Footer'

const Profile = () => {
    return <div>
        <Navbar name={"Profile"} />
            <ProfileComponent />

        <Footer />

    </div>
}

export default Profile