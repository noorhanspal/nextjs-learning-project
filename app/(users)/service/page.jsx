import styles from "./service.module.css";
import team from "@/data/team.json";
import Image from "next/image";

export default function ServicePage() {
  return (
    <section className={styles.serviceContainer}>
      <h1 className={styles.heading}>Our Team</h1>

      <div className={styles.cardGrid}>
        {team.map((member) => (
          <div className={styles.card} key={member.name}>
            
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className={styles.profileImage}
              />
            </div>

            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
