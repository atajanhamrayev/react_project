import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { CgWebsite } from "react-icons/cg";
import UserImage from "../../assets/images/user.png";
import Preloader from "./../../components/common/Preloader";
import ProfileStatus from './ProfileStatus';


const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-[20px]">
      <div className="max-w-[200px] rounded-full">
        <img
          className="rounded-full"
          src={
            props.profile.photos.large ? props.profile.photos.large : UserImage
          }
          alt="profile_image"
        />
      </div>
      <div className="fullname underline flex flex-col items-center justify-center">
        <h1>{props.profile.fullName}</h1>
        <h3>{props.profile.aboutMe}</h3>
        <ProfileStatus status="Heyyyyyyyy Yooooooo..." />
      </div>

      <div
        className={
          `looking_job w-[20px] h-[20px] rounded-full border-solid border-[2px]` +
          (props.profile.lookingForAJob
            ? "border-green-700 bg-green-700"
            : "border-red-700 bg-red-700")
        }
      ></div>
      <div className="looking_job_description">
        {props.profile.lookingForAJobDescription}
      </div>
      <div className="contacts flex flex-row justify-between gap-[20px] text-[20px]">
        {!props.profile.contacts.github ? null : (
          <a href={props.profile.contacts.github}>
            <FaGithub />
          </a>
        )}

        {!props.profile.contacts.vk ? null : (
          <a href={props.profile.contacts.vk}>
            <SlSocialVkontakte />
          </a>
        )}
        {!props.profile.contacts.facebook ? null : (
          <a href={props.profile.contacts.facebook}>
            <FaFacebook />
          </a>
        )}
        {!props.profile.contacts.instagram ? null : (
          <a href={props.profile.contacts.instagram}>
            <FaInstagram />
          </a>
        )}
        {!props.profile.contacts.twitter ? null : (
          <a href={props.profile.contacts.twitter}>
            <FaTwitter />
          </a>
        )}
        {!props.profile.contacts.website ? null : (
          <a href={props.profile.contacts.website}>
            <CgWebsite />
          </a>
        )}

        {!props.profile.contacts.youtube ? null : (
          <a href={props.profile.contacts.youtube}>
            <FaYoutube />
          </a>
        )}
        {!props.profile.contacts.mainLink ? null : (
          <a href={props.profile.contacts.mainLink}>
            <FaLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile;
