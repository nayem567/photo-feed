import { Modal } from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";

const PhotoModal = ({ params: { id, lang } }) => {

    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    )
}

export default PhotoModal;