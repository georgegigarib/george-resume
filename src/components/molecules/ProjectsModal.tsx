import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '@/store'
import { setProjectModalState } from '@/store/modal/modalStatus'
import ThreeDSlider from './ListOfProjectsThreeDSlider'
import Modal from './Modal'

export default function ProjectsModal() {
  const dispatch = useDispatch()
  const isProjectModalOpened = useSelector((state: StoreState) => state.modalStatus.isProjectModalOpen)

  const closeModal = () => {
    dispatch(setProjectModalState(false))
  }

  return (
    <Modal
      mobileHeight="600px"
      normalWidth="70%"
      normalHeight="60%"
      className="max-w-[1100px]"
      isOpened={isProjectModalOpened}
      closeModal={() => closeModal()}
    >
      <ThreeDSlider />
    </Modal>
  )
}
