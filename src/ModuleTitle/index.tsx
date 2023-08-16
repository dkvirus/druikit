import React, { CSSProperties, FC, ReactNode } from 'react';
import Box from '../Box';
import InfoCircleOutlined from '../icons/InfoCircleOutlined';

export interface ModuleTitleProps {
  style?: CSSProperties;
  className?: string;
  category?: string;
  categoryUppercase?: boolean;
  categoryStyle?: CSSProperties;
  categoryClassName?: string;
  title?: string;
  titleStyle?: CSSProperties;
  titleClassName?: string;
  description?: string;
  descriptionStyle?: CSSProperties;
  descriptionClassName?: string;
  showInfoIcon?: boolean;
}

const ModuleTitle: FC<ModuleTitleProps> = ({
  style,
  className,
  category,
  categoryUppercase = true,
  categoryStyle,
  categoryClassName,
  title,
  titleStyle,
  titleClassName,
  description,
  descriptionStyle,
  descriptionClassName,
  showInfoIcon,
}) => {
  const sty: CSSProperties = {
    display: 'inline-block',
    color: '#666',
    ...style,
  };

  /* ********************************** category ************************************** */
  const categorySty: CSSProperties = {
    fontSize: 12,
    ...categoryStyle,
  };

  if (categoryUppercase === true) {
    categorySty.textTransform = 'uppercase';
  }

  let categoryEl: ReactNode = null;

  if (category) {
    categoryEl = (
      <div style={categorySty} className={categoryClassName}>
        {category}
      </div>
    );
  }

  /* ********************************** title ************************************** */
  const titleSty: CSSProperties = {
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    ...titleStyle,
  };

  let titleEl: ReactNode = null;

  if (title) {
    titleEl = (
      <div style={titleSty} className={titleClassName}>
        {title}
        {showInfoIcon ? (
          <>
            <Box width={10} />
            <InfoCircleOutlined color="#999" />
          </>
        ) : null}
      </div>
    );
  }

  /* ********************************** description ************************************** */
  const descriptionSty: CSSProperties = {
    fontSize: 14,
    ...descriptionStyle,
  };

  let descriptionEl: ReactNode = null;

  if (description) {
    descriptionEl = (
      <div style={descriptionSty} className={descriptionClassName}>
        {description}
      </div>
    );
  }

  return (
    <div style={sty} className={className}>
      {categoryEl}
      {titleEl}
      {descriptionEl}
    </div>
  );
};

export default ModuleTitle;
