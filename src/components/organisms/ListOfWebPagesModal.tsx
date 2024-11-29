import Modal from '../molecules/Modal'

const preModal = () => {
  return (
    <div className="h-full w-full bg-slate-600 p-4 rounded-xl cursor-pointer z-[43]">
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
