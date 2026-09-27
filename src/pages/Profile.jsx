function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <h1>My Profile</h1>

      <div className="doctor-profile">
        <h2>{user?.name || "-"}</h2>

        <p><strong>Email:</strong> {user?.email || "-"}</p>
        <p><strong>Role:</strong> {user?.role || "-"}</p>
        <p><strong>User ID:</strong> {user?.userId || "-"}</p>
        <p><strong>Profile ID:</strong> {user?.profileId || "-"}</p>
      </div>
    </div>
  );
}

export default Profile;