import React, { createContext, ReactNode, useContext, useState } from 'react';

interface TooltipContextType {
  tooltip: TooltipState;
  showTooltip: (content: string, className: string, style: React.CSSProperties) => void;
  hideTooltip: () => void;
}

interface TooltipState {
  content: string;
  visible: boolean;
  style: React.CSSProperties;
  className: string;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export const TooltipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    content: '',
    visible: false,
    style: {},
    className: ''
  });

  const showTooltip = (content: string, className: string, style: React.CSSProperties) => {
    setTooltip({ content, visible: true, style, className });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <TooltipContext.Provider value={{ tooltip, showTooltip, hideTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = (): TooltipContextType => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltip must be used within a TooltipProvider');
  }
  return context;
};

export const TooltipContent: React.FC = () => {
  const { tooltip } = useTooltip();

  if (!tooltip.visible) return null;
  
  return (
    <>
      {/* <style>{keyframes}</style> */}
      <div
        className={`absolute bg-gray-50 border max-w-sm w-fit whitespace-nowrap pointer-event-none  text-gray-600 drop-shadow-md px-3 py-2 text-sm rounded-md z-50 hidden lg:block  font-medium   ${tooltip.className}`}
        style={{
          ...tooltip.style,
        }}
        onMouseOver={()=>console.log('mouse over')}
      >
        {tooltip.content}
      </div>
    </>
  );
};