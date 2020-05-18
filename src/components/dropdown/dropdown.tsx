import * as React from 'react';
import './dropdown.scss';

interface IMenuOptions {
  name: string;
  isDisabled?: boolean;
}

export interface IDropdownProps {
 options: IMenuOptions[];
 className?: string;
}

export interface IDropdownState {
  isMenuOpen: boolean;
}

export class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  public state: IDropdownState = {
    isMenuOpen: false,
  }

  public render() {
    const {
      options,
      children,
    } = this.props

    const {
      isMenuOpen,
    } = this.state

    return (
      <div
        className='dropdown className'
        onClick={this.onClick}
      >
        {children}
        {isMenuOpen &&
          <ul className='dropdown__menu'>
            {options.map((option) => (
              <li
                className={`dropdown__menu-option ${option.isDisabled && 'dropdown__menu-option--disabled'}`}
              >
                {option.name}
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }

  private onClick = () => {
    this.setState((prevState: IDropdownState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  }
}
