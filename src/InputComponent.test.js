import React from 'react';
import InputComponent, { useInputParamsSettings, useSetAndClearSubmitted } from './InputComponent';
import { renderHook, act } from '@testing-library/react-hooks';

const setInputSpy = jest.fn();

describe('InputComponent.test.js: basic tests', () => {
  const mockProps = {
    setInput: setInputSpy
  }

  it('Test useInputParamsSettings custom hook', async () => {
    const { result } = renderHook(() => useInputParamsSettings(mockProps));
    await act(async () => result.current.inputParamsSettings.setInputText({firstName: "TestName"}));
    expect(result.current.inputParamsSettings.inputParams).toEqual({
      userId: "",
      firstName: "TestName",
      lastName: ""
    });
  });

  it('Test useSetAndClearSubmitted custom hook', async () => {
    const { result } = renderHook(() => useSetAndClearSubmitted());
    await act(async () => result.current.setAndClearSubmitted.setSubmittedStatus(true));
    expect(result.current.setAndClearSubmitted.submitted).toEqual(true);
  });

});