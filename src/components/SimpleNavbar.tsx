import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveHash } from '../store';

const ActiveHashComponent: React.FC = () => {
  const dispatch = useDispatch();
  const activeHash = useSelector((state: { activeHash: string }) => state.activeHash);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveHash(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={activeHash}
        onChange={handleChange}
        placeholder="Set Active Hash"
      />
      <p>Current Active Hash: {activeHash}</p>
    </div>
  );
};

export default ActiveHashComponent;
