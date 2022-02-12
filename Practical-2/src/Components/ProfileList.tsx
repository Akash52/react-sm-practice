import React, {FC, useEffect, useState} from 'react';
import {CharType} from '../interface';
import {fetchCharacters} from '../services/index';

const ProfileList: FC = () => {
    const [profiles, setProfiles] = useState<CharType[]>([]);
    console.log('profiles', profiles);
    useEffect(() => {
        const fetchApi = async () => {
            setProfiles(await fetchCharacters());
        };
        fetchApi();
    }, []);
    return (
        <div className="cards">
            {profiles.slice(0, 18).map((profile, index: number) => (
                <div key={index}>
                    <div className="profile-card">
                        <img src={profile.image} alt="profile" />
                        <h2>{profile.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
