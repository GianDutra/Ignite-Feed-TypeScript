import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import {Avatar} from './Avatar'
import fotoPerfil from '../assets/meuPerfil.png';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50' />
          
            <div className={styles.profile}>
                <Avatar src={fotoPerfil}/>

                <strong>Gian Dutra</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}