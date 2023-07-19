import React, { CSSProperties, FC, useRef } from 'react';
import BaseSelect, { BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import SelectOption, {
  OptionItem,
  SelectDropdownHeader,
} from '../SelectOption';

type FileType = 'Excel' | 'CSV' | 'PDF' | 'JPG' | 'Clipboard';

export interface ExportSelectProps extends BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  // options
  showExcel?: boolean;
  showCSV?: boolean;
  showPDF?: boolean;
  showJPG?: boolean;
  showClipboard?: boolean;
  excelAlias?: string;
  csvAlias?: string;
  pdfAlias?: string;
  jpgAlias?: string;
  clipboardAlias?: string;
  optionsOrder?: Array<FileType>;
  // ui
  label?: string;
  size?: 'small' | 'middle' | 'large';
  placeholder?: string;
  disabled?: boolean;
  selectorValue?: string;
  dropdownTitle?: string;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  onExportExcel?: () => void;
  onExportCSV?: () => void;
  onExportJPG?: () => void;
  onExportPDF?: () => void;
  onExportClipboard?: () => void;
}

const ExportSelect: FC<ExportSelectProps> = ({
  style,
  className = '',
  showExcel,
  showCSV,
  showPDF,
  showJPG,
  showClipboard,
  excelAlias = 'Excel',
  csvAlias = 'CSV',
  pdfAlias = 'PDF',
  jpgAlias = 'JPG',
  clipboardAlias = 'To clipboard',
  optionsOrder,
  label,
  size = 'middle',
  disabled,
  placeholder,
  selectorValue = 'Export',
  dropdownTitle = 'Export',
  dropdownStyle,
  dropdownClassName,
  onExportExcel,
  onExportCSV,
  onExportJPG,
  onExportPDF,
  onExportClipboard,
  ...props
}) => {
  const selectRef = useRef<BaseSelectRefProps>(null);

  /* ************************* options ******************************* */
  const options: OptionItem[] = [];
  if (showExcel) {
    options.push({ value: 'Excel', label: excelAlias });
  }
  if (showCSV) {
    options.push({ value: 'CSV', label: csvAlias });
  }
  if (showPDF) {
    options.push({ value: 'PDF', label: pdfAlias });
  }
  if (showJPG) {
    options.push({ value: 'JPG', label: jpgAlias });
  }
  if (showClipboard) {
    options.push({ value: 'CLIPBOARD', label: clipboardAlias });
  }

  // TODO optionsOrder
  if (optionsOrder?.length) {
    // ...
  }

  /* ************************* dropdown ******************************* */
  const dropdownSty: CSSProperties = {
    padding: 0,
    minWidth: 140,
    ...dropdownStyle,
  };

  const dropdownLabelStyle: CSSProperties = {
    width: 'fit-content',
    whiteSpace: 'nowrap',
  };

  /* ************************* export ******************************* */
  const onExport = (value: FileType) => {
    switch (value) {
      case 'Excel':
        onExportExcel?.();
        break;
      case 'CSV':
        onExportCSV?.();
        break;
      case 'JPG':
        onExportJPG?.();
        break;
      case 'PDF':
        onExportPDF?.();
        break;
      case 'Clipboard':
        onExportClipboard?.();
        break;
      default:
    }
  };

  const renderDropdown = (
    <>
      <SelectDropdownHeader title={dropdownTitle} />
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        {options.map((item) => {
          return (
            <SelectOption
              key={item.value}
              labelStyle={dropdownLabelStyle}
              disabled={item.disabled}
              onChange={(value) => {
                if (value === true) {
                  onExport(item.value as FileType);
                }
                selectRef.current?.close();
              }}
            >
              {item.label}
            </SelectOption>
          );
        })}
      </div>
    </>
  );

  return (
    <BaseSelect
      ref={selectRef}
      style={style}
      className={className}
      disabled={disabled}
      placeholder={placeholder}
      label={label}
      selectorValue={selectorValue}
      selectorSize={size}
      renderDropdown={renderDropdown}
      dropdownStyle={dropdownSty}
      dropdownClassName={dropdownClassName}
      {...props}
    />
  );
};

export default ExportSelect;
