import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './index'; // Adjust the import path as needed

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('Modal Component', () => {
  const setOpenModal = jest.fn();

  const renderModal = (open: boolean) => {
    return render(
      <Modal open={open} setOpenModal={setOpenModal}>
        <Modal.Header>Header Content</Modal.Header>
        <Modal.Panel>Panel Content</Modal.Panel>
        <Modal.Footer>Footer Content</Modal.Footer>
      </Modal>
    );
  };

  it('renders the modal when open is true', () => {
    renderModal(true);

    expect(screen.getByText('Header Content')).toBeInTheDocument();
    expect(screen.getByText('Panel Content')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('does not render the modal when open is false', () => {
    renderModal(false);

    expect(screen.queryByText('Header Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Panel Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Footer Content')).not.toBeInTheDocument();
  });

  it('calls setOpenModal when the backdrop is clicked', () => {
    renderModal(true);
    const backdrop = document.querySelector(".backdrop");

    if (backdrop) {
      fireEvent.click(backdrop);
    }
    expect(setOpenModal).toHaveBeenCalledWith(false);
  });

  it('applies custom class names to header, panel, and footer', () => {
    render(
      <Modal open={true} setOpenModal={setOpenModal}>
        <Modal.Header className="custom-header">Header Content</Modal.Header>
        <Modal.Panel className="custom-panel">Panel Content</Modal.Panel>
        <Modal.Footer className="custom-footer">Footer Content</Modal.Footer>
      </Modal>
    );

    expect(screen.getByText('Header Content')).toHaveClass('custom-header');
    expect(screen.getByText('Panel Content')).toHaveClass('custom-panel');
    expect(screen.getByText('Footer Content')).toHaveClass('custom-footer');
  });

  it('handles onKeyDown event', () => {
    const onKeyDown = jest.fn();
    render(
      <Modal open={true} setOpenModal={setOpenModal} onKeyDown={onKeyDown}>
        <Modal.Panel>Panel Content</Modal.Panel>
      </Modal>
    );

    fireEvent.keyDown(screen.getByText('Panel Content'), { key: 'Escape', code: 'Escape' });
    expect(onKeyDown).toHaveBeenCalled();
  });
});