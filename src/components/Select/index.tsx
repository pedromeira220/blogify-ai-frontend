// TODO: ajustar o hexadecimal das cores possíveis de escolha no select

import { ArrowDown, CaretDown, Check, Sparkle } from '@phosphor-icons/react'
import * as Select from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'

import React from 'react'

type Color = 'purple' | 'orange' | 'blue' | 'green' | 'yellow'

type SelectItemProps = {
  value: string
  prefix: Color | 'ask-ai'
  displayText: string
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  prefix,
  displayText,
}) => {
  const renderPrefix = () => {
    switch (prefix) {
      case 'purple':
        return <div className="w-2 h-2 rounded-full bg-primary-600" />
      case 'orange':
        return <div className="w-2 h-2 rounded-full bg-[#FF4405]" />
      case 'blue':
        return <div className="w-2 h-2 rounded-full bg-blue-600" />
      case 'green':
        return <div className="w-2 h-2 rounded-full bg-green-600" />
      case 'yellow':
        return <div className="w-2 h-2 rounded-full bg-yellow-600" />
      case 'ask-ai':
        return (
          <Sparkle
            className="text-primary-600 text-base"
            size={16}
            weight="fill"
          />
        )
    }
  }

  return (
    <Select.Item
      className={twMerge(
        'data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100 data-[state=checked]:bg-gray-50',
        'text-gray-900 flex items-center py-3 relative px-3',
      )}
      value={value}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {renderPrefix()}
          <Select.ItemText>{displayText}</Select.ItemText>
        </div>
        <Select.ItemIndicator className="text-primary-600">
          <Check weight="bold" />
        </Select.ItemIndicator>
      </div>
    </Select.Item>
  )
}

interface SelectInput {
  onValueChange: (value: string) => void
  value: string
}

export const SelectInput: React.FC<SelectInput> = ({
  onValueChange,
  value,
}) => (
  <Select.Root
    value={value}
    onValueChange={(value) => {
      onValueChange(value)
    }}
  >
    <Select.Trigger className="flex items-center justify-between rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-[placeholder]:text-gray-500 w-full">
      <Select.Value placeholder="Selecione a cor primária" />
      <Select.Icon className="text-gray-500">
        <CaretDown />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-lg shadow-2xl border border-gray-200">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <CaretDown />
        </Select.ScrollUpButton>

        <Select.Viewport className="py-3">
          <SelectItem displayText="Roxo" prefix="purple" value="PURPLE" />
          <SelectItem displayText="Laranja" prefix="orange" value="ORANGE" />
          <SelectItem displayText="Azul escuro" prefix="blue" value="BLUE" />
          <SelectItem displayText="Verde" prefix="green" value="GREEN" />
          <SelectItem displayText="Amarelo" prefix="yellow" value="YELLOW" />
          <SelectItem
            displayText="Deixe a IA escolher"
            prefix="ask-ai"
            value="ASK_AI"
          />
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ArrowDown />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)
