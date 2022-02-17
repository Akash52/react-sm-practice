import React, {FC, useEffect, useState} from 'react';
import {CharType} from '../../interface';
import {fetchCharacters} from '../../services/index';
import Spinner from './Spinner';

const ProfileList: FC = () => {
    const [profiles, setProfiles] = useState<CharType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    console.log('profiles', profiles);
    useEffect(() => {
        setIsLoading(true);
        const fetchApi = async () => {
            setProfiles(await fetchCharacters());
        };
        fetchApi();
        setIsLoading(false);
    }, []);
    return isLoading ? (
        <Spinner />
    ) : (
        <div className="cards">
            {profiles.slice(0, 18).map((profile, index: number) => (
                <div key={index}>
                    <div className="profile-card">
                        <img src={profile.image} alt="profile" />
                        <h2>{profile.name}</h2>
                        <p>{profile.interpretedBy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
