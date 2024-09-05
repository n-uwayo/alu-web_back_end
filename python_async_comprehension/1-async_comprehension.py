#!/usr/bin/env python3
"""
Async Comprehensions.
"""

import asyncio
from typing import List
from basic_async_syntax import wait_random  # Corrected import

async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Return the 10 random numbers. """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]

