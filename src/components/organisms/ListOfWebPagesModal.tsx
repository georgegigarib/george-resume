import Modal from '@/components/molecules/depricated-Modal'

const preModal = () => {
  return (
    <div
      className="h-full w-full p-4 rounded-xl cursor-pointer z-[43] 
    border-2 
    bg-app-lightModeBoxes-box1 
    border-app-darkModeBoxes-box1 
    dark:bg-app-darkModeBoxes-box1 
    dark:border-app-lightModeBoxes-box1 
    "
    >
      List of websites
    </div>
  )
}

const ListOfWebsitesModal = () => {
  return (
    <Modal trigger={preModal()} layoutId="websites-modal">
      <div className="h-full w-full bg-slate-600 p-4 rounded-xl cursor-pointer z-[43]">
        <h1>List of Projects</h1>
        <p>This is the content inside the modal for the projects list.</p>
      </div>
    </Modal>
  )
}

export default ListOfWebsitesModal
