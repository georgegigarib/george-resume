// import { render, fireEvent, screen, waitFor } from '@testing-library/react'
// import { useIsMobile } from '@/hooks/useIsMobile'
// import '@testing-library/jest-dom'
// import { vi, describe, Mock, it, beforeEach, expect } from 'vitest'
// import { centerModalInViewport } from '@/utils/centerModalInViewPort'
// import Modal from '@/components/molecules/Modal'
// import AppTestProvider from '@/AppTestProvider/AppTestProvider'
//
// vi.mock('@/utils/centerModalInViewport')
// vi.mock('@/hooks/useIsMobile')
//

// //TODO: fix this test
// describe.skip('Modal Component', () => {
//   beforeEach(() => {
//     vi.clearAllMocks()
//     ;(centerModalInViewport as Mock).mockReturnValue({ top: 100, left: 100 })
//   })
//
//   const renderModal = () =>
//     render(
//       <AppTestProvider>
//         <Modal trigger={<button>Open</button>} layoutId="some-layoutid">
//           <div>Modal Content</div>
//         </Modal>
//       </AppTestProvider>
//     )
//
//   it('matches snapshot', () => {
//     const { asFragment } = renderModal()
//
//     expect(asFragment()).toMatchSnapshot()
//   })
//
//   it('opens modal when trigger is clicked', () => {
//     renderModal()
//
//     fireEvent.click(screen.getByText('Open'))
//     expect(screen.getByText('Modal Content')).toBeInTheDocument()
//   })
//
//   it('closes modal when close button is clicked', async () => {
//     renderModal()
//
//     fireEvent.click(screen.getByText('Open'))
//     expect(screen.getByText('Modal Content')).toBeInTheDocument()
//
//     fireEvent.click(screen.getByTestId('CloseIcon'))
//
//     await waitFor(() => {
//       expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
//     })
//   })
//
//   it('adjusts modal position on resize', () => {
//     const mockPosition = { top: 100, left: 100 }
//     ;(centerModalInViewport as Mock).mockReturnValue(mockPosition)
//
//     renderModal()
//
//     fireEvent.click(screen.getByText('Open'))
//
//     // Simulate window resize
//     fireEvent.resize(window)
//     expect(centerModalInViewport).toHaveBeenCalledTimes(2)
//   })
//
//   it('adapts to mobile layout when isMobile is true', () => {
//     ;(useIsMobile as Mock).mockReturnValue(true)
//
//     renderModal()
//
//     fireEvent.click(screen.getByText('Open'))
//     expect(centerModalInViewport).toHaveBeenCalledWith(true)
//   })
// })
