import styles from "./SpecialButton.module.css";

type UserProfileButtonProps = {
  initial: string;
  onClick: () => void;
};


export function UserProfileButton({ initial, onClick }: UserProfileButtonProps) {
  return (
    <button
      title={initial}
      className={styles["user-profile-button"]}
      onClick={onClick}
      aria-label={"User Profile"}
    >
      {initial}
    </button>
  );
}