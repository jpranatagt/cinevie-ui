import React from 'react'
import styled from 'styled-components'

import { S_Screen } from '@styles'

import { U_useDisableBodyScroll } from '@utils'

export const U_useModalDialog = () => {
  const [toggled, setToggled] = React.useState(false)

  const handleToggleModalDialog = () => {
    setToggled(!toggled)
  }

  const C_ModalDialog = (props) => {
    const {
      title = 'Are you sure want to ...?',
      description = 'Description of the modal',
      cancelTitle = 'CANCEL',
      proceedTitle = 'PROCEED',
      handleProceed = () => {},
    } = props

    U_useDisableBodyScroll(toggled)

    return (
      <S_Wrapper isToggled={toggled}>
        <S_ModalWrapper>
          <S_Title>{title}</S_Title>
          <S_Description>{description}</S_Description>
          <S_Actions>
            <S_ButtonCancel onClick={() => handleToggleModalDialog()}>
              {cancelTitle}
            </S_ButtonCancel>
            <S_ButtonProceed onClick={() => handleProceed()}>
              {proceedTitle}
            </S_ButtonProceed>
          </S_Actions>
        </S_ModalWrapper>
      </S_Wrapper>
    )
  }

  return [handleToggleModalDialog, C_ModalDialog]
}

const S_Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: hsla(var(--primary-background), 0.7);

  visibility: ${(p) => (p.isToggled ? 'visible' : 'hidden')};
  backface-visibility: hidden;
  z-index: 10;
`

const S_ModalWrapper = styled.article`
  position: relative;
  top: 40%;
  left: 50%;
  padding: var(--spaceX-lg);

  display: flex;
  flex-direction: column;
  gap: var(--spaceY-xl);

  max-width: 80%;

  background-color: hsla(var(--primary-5), 0.85);

  transform: translate(-50%, -40%);

  ${S_Screen.md`
    top: 30%;
    left: 50%;
    padding: var(--spaceX-lg);
    transform: translate(-50%, -30%);

    max-width: 50%;
  `}
`

const S_Title = styled.h4``

const S_Description = styled.p``

const S_Actions = styled.section`
  display: flex;
  justify-content: end;

  gap: var(--spaceX-xl);
`

const S_ButtonCancel = styled.button`
  --color: var(--primary-text);

  padding: var(--spaceY-xs) var(--spaceX-md);

  background-color: transparent;
  color: hsl(var(--color));
  border-color: hsl(var(--color));
  border-style: solid;

  cursor: pointer;
`

const S_ButtonProceed = styled.button`
  --color-proceed: var(--primary-background);

  padding: var(--spaceY-xs) var(--spaceX-md);

  background-color: hsl(var(--primary-text));
  color: hsl(var(--color-proceed));
  border-color: hsl(var(--primary-text));
  border-style: solid;

  cursor: pointer;
`
