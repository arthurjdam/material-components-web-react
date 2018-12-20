// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import typographyHOC from './typography';

export const Body1 = typographyHOC({classModifier: 'body1', tag: 'p'});
export const Body2 = typographyHOC({classModifier: 'body2', tag: 'p'});
export const Button = typographyHOC({classModifier: 'button', tag: 'span'});
export const Caption = typographyHOC({classModifier: 'caption', tag: 'span'});
export const Headline1 = typographyHOC({classModifier: 'headline1', tag: 'h1'});
export const Headline2 = typographyHOC({classModifier: 'headline2', tag: 'h2'});
export const Headline3 = typographyHOC({classModifier: 'headline3', tag: 'h3'});
export const Headline4 = typographyHOC({classModifier: 'headline4', tag: 'h4'});
export const Headline5 = typographyHOC({classModifier: 'headline5', tag: 'h5'});
export const Headline6 = typographyHOC({classModifier: 'headline6', tag: 'h6'});
export const Overline = typographyHOC({classModifier: 'overline', tag: 'span'});
export const Subtitle1 = typographyHOC({classModifier: 'subtitle1', tag: 'h6'});
export const Subtitle2 = typographyHOC({classModifier: 'subtitle2', tag: 'h6'});