import React from 'react';
import { Button } from 'components/atoms';

type Props = {
  size?: 'small' | 'medium' | 'large';
  labels: string[];
  onSelect?: (label: string) => void;
  onReset?: () => void;
};

export function ButtonsGroup({
  size = 'small',
  labels,
  onSelect,
  onReset,
}: Props) {
  return (
    <div>
      {onReset && <Button size="small" onClick={onReset} label="All" />}
      {labels.map((label) => (
        <Button
          size="small"
          onClick={onSelect ? () => onSelect(label) : () => null}
          label={label}
        />
      ))}
    </div>
  );
}
