import styles from './NavBar.module.css'
import NavIconButton from './NavIconButton'

function click() {
  console.log("Yes");
}

function NavBar(props: any) {
    return (
        <div className={styles.flex_container}>
            <NavIconButton name="SPLASH" myClick={click}/>
            <NavIconButton name="ABOUT" myClick={click}/>
            <NavIconButton name="SCHEDULE" myClick={click}/>
            <NavIconButton name="FAQ" myClick={click}/>
            <NavIconButton name="SPONSORS" myClick={click}/>
        </div>
    )
}

export default NavBar;