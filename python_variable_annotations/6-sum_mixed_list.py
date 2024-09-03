#!/usr/bin/env python3
""" Complex types - mixed list """

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ return the sum of mixed list as float. """
    return sum(mxd_lst)
