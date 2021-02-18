import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";



function ProfilePage() {
  const { currentUser, userName } = useAuth();
  const [loading, setLoading] = useState(true);
  const estateList = [];

  useEffect(() => {
    if (loading) {
      async function getOwnEstate() {
        const estateRef = db.collection("estate");
        const queryRef = await estateRef
          .where("owner", "==", currentUser.email)
          .get();
        if (queryRef.empty) {
          if (loading) {
            console.log("No hay documentos.");
            setLoading(false);
          }
        } else {
          if (loading) {
            queryRef.forEach((doc) => {
              const land = {
                id: doc.id,
                data: doc.data(),
              };
              estateList.push(land);
            });

            console.log(estateList);
            setLoading(false);
          }
        }
      }
      setLoading(false);
      return getOwnEstate;
    }
  }, [loading, currentUser]);

  return (
    <>
      <div className="profile-page">
        <div className="container mt-3">
          <div className="row g-2">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card border-0 rounded shadow-sm">
                <div className="card-body noto">
                  <p>
                    <strong>{userName}</strong>
                    <br />
                    <strong>{currentUser.email}</strong>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                  <h4>Mis Inmuebles</h4>

                  

                  <h4>Favoritos</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Profile() {
  const { currentUser } = useAuth();
  const history = useHistory();

  return <>{!currentUser ? history.push("/auth/") : <ProfilePage />}</>;
}
