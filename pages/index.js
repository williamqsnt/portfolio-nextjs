import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import desktop from '../public/assets/desktop.png'
import logo from '../public/assets/logo.png'




export default function Home() {

  
  const [menu, setMenu] = useState(false);



  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | William Quesnot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section style={{backgroundColor : 'rgb(10, 25, 47)', opacity : 1, zIndex : 5, height : '80px', width : '100%', position : 'fixed'}}>

        <div style={{width : '100%', height : '100%', display : 'flex', justifyContent : 'space-between'}}>
        <Image src={logo} alt="logo" width={50} style={{marginLeft : '1em', marginTop : '1em'}} />
          <button onClick={()=> setMenu(true)} style={{display : 'flex', alignItems : 'center', justifyContent : 'center', width : '80px', backgroundColor : 'unset', border : 'none'}}><p style={{fontSize : '3.5em', color : 'white'}}>☰</p></button>
          
        </div>
        {menu &&(
          <div style={{position :'absolute', top : '0px', width : '100%'}}>
            <div style={{height : '320px', width : '100%', backgroundColor :'rgb(10,10,10)', display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
              <Link href="ok">À PROPOS DE MOI</Link>
              <br/>
              <Link href="ok">COMPÉTENCES</Link>
              <br/>
              <Link href="ok">EXPÉRIENCES</Link>
              <br/>
              <Link href="ok">PROJETS</Link>
              <br/>
              <Link href="ok">ME CONTACTER</Link>
              <br/>
              <button onClick={()=> setMenu(false)} style={{backgroundColor : 'unset', border : 'none', margin : 'unset', padding : 'unset', height : '50px', display : 'flex', alignItems :'center', justifyContent : 'center'}}><p style={{fontSize : '4em', color : 'white'}}>&times;</p></button>
            </div>  
          </div>
        )}
        
      </section>

      <section className={styles.center} style={{height : '100vh', width :'100%'}}>
        <div style={{display : 'flex', alignItems : 'center', flexDirection : 'column', justifyContent : 'center', height : '100%'}}>
          <Image className="desktop" alt="bg desktop" src={desktop} width={150} />
          <div>
            <h2 style={{color :'rgb(73, 242, 202)', fontSize : '2em', fontFamily : 'monospace'}}>Je suis William,</h2>
            <h1 style={{fontSize : '2.2em'}}>DÉVELOPPEUR <br/><b style={{fontWeight : 'lighter'}}>FRONT-END</b></h1>

            <div style={{width : '100%', textAlign : 'center'}}>
              <div style={{width :'310px', height : '50px', border : '1px solid rgb(73, 242, 202)', display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
                <a href="google.com">quesnot.william@hotmail.com</a>
              </div>
            </div>
            <br/>
            

            <div style={{textAlign : 'center'}}>
              <h3>J&apos;offre mes services pour intégrer <br/> l&apos;<b style={{color : 'rgb(73,242,202'}}>interface</b>, le <b style={{ color : 'rgb(73, 242, 202)'}}>design</b> et le <b style={{color : 'rgb(73, 242, 202)'}}>SEO</b> de<br/> votre entreprise.</h3>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  )
}


