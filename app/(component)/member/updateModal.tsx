import Image from 'next/image';
import ModalStyle from './updateModal.module.scss';
import { ChangeEvent, useEffect } from 'react';
import useMember from '@/app/(hooks)/member/useMember';

interface Props {
  imageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  nickNameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordCheckHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  updateMember: () => void;
  profile: any;
  imageUrl: any;
  fileInput: any;
  modal: boolean;
  setModal: (i:boolean) => void;
}

const UpdateModal = (
  {imageHandler,
  nickNameHandler,
  passwordHanler,
  passwordCheckHanler,
  phoneHandler,
  updateMember,
  profile,
  imageUrl,
  fileInput,
  modal,
  setModal,
  setImageUrl,
  setPhone,
  setNickName
}: any
) => {

  useEffect(() => {
    setImageUrl(profile.imageUrl);
    setNickName(profile.nickname);
    setPhone(profile.phoneNumber);
  }, [])

  return (
    <>
      <div className={ModalStyle.background}></div>

      <div className={ModalStyle.container}>
        <div className={ModalStyle.esc} onClick={() => setModal(false)}>BC</div>
        <span className={ModalStyle.title}>프로필 수정</span>
        <img className={ModalStyle.img} src={imageUrl} width={100} height={100} alt='프로필'/>
        <label htmlFor="input-file" >Profile Image</label>
          <input type="file" id='input-file' placeholder='Profile Image' ref={fileInput} onChange={(e) => imageHandler(e)} style={{display:'none'}} />
        {/* <div className={ModalStyle.img}></div> */}

        <div>
          <input type="text" defaultValue={profile.nickname} className={ModalStyle.nickname} onChange={(e) => nickNameHandler(e)}/>
          <span>연필</span>
        </div>

        <div>
          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>연락처</span>
            <div className={ModalStyle.inputBox}>
              <input type="text" defaultValue={profile.phoneNumber} className={ModalStyle.input} onChange={(e) => phoneHandler(e)}/>
              <span>연필</span>
            </div>
          </div>

          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>변경 비밀번호</span>
            <div className={ModalStyle.inputBox}>
              <input type="text" className={ModalStyle.input} onChange={(e) => passwordHanler(e)}/>
              <span>연필</span>
            </div>
          </div>

          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>변경 비밀번호 확인</span>
            <div className={ModalStyle.inputBox}>
              <input type="text" className={ModalStyle.input} onChange={(e) => passwordCheckHanler(e)}/>
              <span>연필</span>
            </div>
          </div>
        </div>

        <button className={ModalStyle.submit} onClick={() => {updateMember(); setModal(false)}}>확인</button>
      </div>
    </>
  );
}

export default UpdateModal;