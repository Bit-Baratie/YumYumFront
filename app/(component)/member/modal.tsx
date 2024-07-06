import ModalStyle from './modal.module.scss';

interface Props {
  image: string;
  nickName: string;
  phone: string;
}

const Modal = ({image, nickName, phone}: Props) => {
  return (
    <div className={ModalStyle.container}>
      <div className={ModalStyle.esc}>X</div>
      <span className={ModalStyle.title}>프로필 수정</span>
      <div className={ModalStyle.img}></div>
      <div><input type="text" defaultValue={nickName} className={ModalStyle.nickname} readOnly/><span>연필</span></div>
      <div>
        <div className={ModalStyle.inputSet}>
          <span className={ModalStyle.label}>연락처</span>
          <div className={ModalStyle.inputBox}><input type="text" defaultValue={phone} className={ModalStyle.input}/><span>연필</span></div>
        </div>
        <div className={ModalStyle.inputSet}>
          <span className={ModalStyle.label}>변경 비밀번호</span>
          <div className={ModalStyle.inputBox}><input type="text" className={ModalStyle.input}/><span>연필</span></div>
        </div>
        <div className={ModalStyle.inputSet}>
          <span className={ModalStyle.label}>변경 비밀번호 확인</span>
          <div className={ModalStyle.inputBox}><input type="text" className={ModalStyle.input}/><span>연필</span></div>
        </div>
      </div>
      <button className={ModalStyle.submit}>확인</button>
    </div>
  );
}

export default Modal;