import useMember from '@/app/(hooks)/member/useMember';
import ModalStyle from './modal.module.scss';
import { ChangeEvent } from 'react';
import { useParams } from 'next/navigation';

interface Props {
  imageHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  nickNameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordCheckHanler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  updateMember: () => void;
  nickName: string;
  phone: string;
  setModal: (i:boolean) => void;
}

const Modal = (
  {imageHandler,
  nickNameHandler,
  passwordHanler,
  passwordCheckHanler,
  phoneHandler,
  updateMember,
  nickName,
  phone,
  setModal}: Props
) => {

  return (
    <>
      <div className={ModalStyle.background}></div>

      <div className={ModalStyle.container}>
        <div className={ModalStyle.esc} onClick={() => setModal(false)}>BC</div>
        <span className={ModalStyle.title}>프로필 수정</span>
        <div className={ModalStyle.img}></div>

        <div>
          <input type="text" value={nickName} className={ModalStyle.nickname} onChange={(e) => nickNameHandler(e)}/>
          <span>연필</span>
        </div>

        <div>
          <div className={ModalStyle.inputSet}>
            <span className={ModalStyle.label}>연락처</span>
            <div className={ModalStyle.inputBox}>
              <input type="text" className={ModalStyle.input} onChange={(e) => phoneHandler(e)}/>
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

        <button className={ModalStyle.submit} onClick={updateMember}>확인</button>
      </div>
    </>
  );
}

export default Modal;