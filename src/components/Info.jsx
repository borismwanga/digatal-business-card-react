import profilePic from '../assets/profile-pic.png'


function info() {
    return ( 
        <div>
            <img src={profilePic} alt="profil-pic"  className='profil-pic'/>
            <h1>Boris Mwanga</h1>
            <h3>Web Developer</h3>
            <a href="" target="_blank" rel="noopener noreferrer"> borismwan.ga</a>
            <div className="btn">
                <button>
                    Email
                    </button>
                <button>LinkedIn</button>
            </div>
        </div>
     );
}

export default info;