import React from "react";
import Select from "react-select";

import DropdownIndicator from "./DropdownIcon";

const FilterSelect = () => {
  const data = [
    {value: "Popularity", label: "Popularity"},
    {value: "Date Updated", label: "Date Updated"},
  ]

  return (
    <div className="flex items-center">
      <Select
        isMulti={false}
        placeholder="Popularity"
        components={{ DropdownIndicator }}
        className="font-bold text-sm"
        unstyled
        classNames={{
          control: () => "w-full rounded-md py-3 space-x-2 border-none",
          placeholder: () => "text-black",
          option: () =>
            "max-w-[10rem] bg-[#EEF4F4] px-3 py-2 text-center hover:bg-[#EBD7B5] font-semibold",
        }}
        styles={{
            dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : ''
            })
        }}
        options={data}
      />
    </div>
  );
};

export default FilterSelect;
